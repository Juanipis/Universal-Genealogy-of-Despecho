import os
import sys
import requests

# Configuracion
API_KEY = os.environ.get("JULES_API_KEY")
GITHUB_REPO = os.environ.get("GITHUB_REPOSITORY")  # Formato "owner/repo"
BRANCH = os.environ.get("REF_NAME", "main")  # Rama base
JULES_API_URL = "https://jules.googleapis.com/v1alpha"

if not API_KEY:
    print("Error: Falta JULES_API_KEY")
    sys.exit(1)

headers = {
    "X-Goog-Api-Key": API_KEY,
    "Content-Type": "application/json",
}


def get_source_name(repo_full_name):
    """Busca el ID interno del source de Jules para este repo."""
    url = f"{JULES_API_URL}/sources"
    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        print(f"Error obteniendo sources: {response.text}")
        sys.exit(1)

    data = response.json()
    owner, repo = repo_full_name.split("/")

    # Buscamos el source que coincida con el repo actual
    for source in data.get("sources", []):
        gh = source.get("githubRepo", {})
        if gh.get("owner") == owner and gh.get("repo") == repo:
            return source["name"]

    print(
        f"Error: No se encontro el source para {repo_full_name}. "
        "Instalaste la App de Jules en este repo?"
    )
    sys.exit(1)


def create_session(source_name):
    """Crea la sesion que dispara el trabajo de Jules."""
    url = f"{JULES_API_URL}/sessions"

    prompt_text = (
        "Lee AGENTS.md y sigue la seccion de 'meter artistas'. "
        "Tarea: anade 2-3 artistas nuevos al arbol en src/config/treeData.ts sin tocar nodos existentes. "
        "Prioriza ramas pobres o niveles con pocos descendientes (llenar hacia abajo). "
        "Usa el script CLI `node scripts/add-artist.mjs` para insertar nodos, nunca edites el archivo a mano. "
        "Cada nodo debe tener id en kebab-case, branch valido (mex/pop/urb/emo/salsa), image usando img('Nombre'), "
        "y copys en es/en con tono breve y picante; respeta acentos raros existentes y no modifiques otros textos. "
        "Si hay imagen disponible, agrega mapping en src/config/artistImages.ts o deja placeholder. "
        "Al final, resume que ramas reforzaste."
    )

    payload = {
        "prompt": prompt_text,
        "sourceContext": {
            "source": source_name,
            "githubRepoContext": {"startingBranch": BRANCH},
        },
        "automationMode": "AUTO_CREATE_PR",
        "title": "Carga automatica de artistas",
    }

    response = requests.post(url, headers=headers, json=payload)

    if response.status_code == 200:
        session_data = response.json()
        print("OK. Sesion iniciada exitosamente.")
        print(f"ID Sesion: {session_data.get('name')}")
        print("Jules esta trabajando en segundo plano. El PR aparecera pronto.")
    else:
        print(f"Error creando sesion: {response.text}")
        sys.exit(1)


if __name__ == "__main__":
    print(f"Iniciando Jules para: {GITHUB_REPO} en rama {BRANCH}")
    source_name = get_source_name(GITHUB_REPO)
    print(f"Source encontrado: {source_name}")
    create_session(source_name)
