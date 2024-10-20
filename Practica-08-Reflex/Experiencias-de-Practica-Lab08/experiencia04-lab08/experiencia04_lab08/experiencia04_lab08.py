import reflex as rx
import httpx

class APIState(rx.State):
    posts: list[dict] = []
    error: str = ""

    async def obtener_publicaciones(self):
        self.error = ""
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get('https://jsonplaceholder.typicode.com/posts')
                response.raise_for_status()  # Verifica si la solicitud fue exitosa
                self.posts = response.json()  # Procesamos los datos JSON recibidos
        except httpx.HTTPStatusError as e:
            self.error = f"Error al obtener los datos: {e}"

def MostrarPublicaciones():
    # Mostrar mensaje de error si la solicitud falló
    return rx.box(
        rx.cond(
            APIState.error != "",
            rx.text(APIState.error, color="red", margin_top="10px")
        ),
        rx.cond(
            APIState.posts == [],
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

app = rx.App()
app.add_page(index)
