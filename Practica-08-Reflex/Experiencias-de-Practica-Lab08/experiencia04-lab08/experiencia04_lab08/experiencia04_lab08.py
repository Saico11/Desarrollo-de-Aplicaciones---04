import reflex as rx
import httpx

# Estado global para manejar los datos obtenidos de la API
class APIState(rx.State):
    posts: list[dict] = []  # Lista de publicaciones obtenidas de la API
    error: str = ""   # Mensaje de error en caso de fallo en la solicitud

    # Función para hacer la solicitud GET a la API usando AsyncClient
    async def obtener_publicaciones(self):
        self.error = ""  # Limpiar cualquier error previo
        try:
            # Usamos AsyncClient para hacer la solicitud asincrónica
            async with httpx.AsyncClient() as client:
                response = await client.get('https://jsonplaceholder.typicode.com/posts')
                response.raise_for_status()  # Verifica si la solicitud fue exitosa
                self.posts = response.json()  # Procesamos los datos JSON recibidos
        except httpx.HTTPStatusError as e:
            self.error = f"Error al obtener los datos: {e}"

# Componente para mostrar la lista de publicaciones
def MostrarPublicaciones():
    # Mostrar mensaje de error si la solicitud falló
    return rx.box(
        rx.cond(
            APIState.error != "",  # Usamos rx.cond para evaluar si hay un error
            rx.text(APIState.error, color="red", margin_top="10px")
        ),
        rx.cond(
            APIState.posts == [],  # Mostrar "Cargando..." si no hay publicaciones aún
            rx.text("Cargando publicaciones...", margin_top="10px")
        ),
        rx.foreach(
            APIState.posts,
            lambda post: rx.box(
                rx.heading(post["title"], font_size="20px", margin_bottom="5px"),
                rx.text(post["body"], margin_bottom="15px"),
                border="1px solid #ccc",
                padding="10px",
                margin_bottom="10px",
                border_radius="8px"
            )
        )
    )

# Componente principal que incluye el botón para obtener los datos y mostrar las publicaciones
def index() -> rx.Component:
    return rx.container(
        rx.vstack(
            rx.button(
                "Obtener Publicaciones",
                on_click=APIState.obtener_publicaciones,
                color_scheme="blue",
                margin_bottom="20px"
            ),
            MostrarPublicaciones(),
            spacing="20px",
            align_items="center",
            width="100%",
        ),
        padding="20px",
        max_width="600px",
        margin="0 auto",
    )

# Configuración de la aplicación
app = rx.App()
app.add_page(index)
