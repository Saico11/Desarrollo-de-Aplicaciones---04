import reflex as rx
import re

class FormularioContactoState(rx.State):
    nombre: str = ""
    correo: str = ""
    mensaje: str = ""
    error: str = ""
    exito: str = ""

    def validar_correo(self):
        patron = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
        return re.match(patron, self.correo) is not None

    def enviar_formulario(self):
        self.error = ""
        self.exito = ""

        if not self.nombre or not self.correo or not self.mensaje:
            self.error = "Todos los campos son obligatorios."
        elif not self.validar_correo():
            self.error = "El correo electrónico no tiene un formato válido."
        else:
            self.exito = f"¡Gracias, {self.nombre}! Hemos recibido tu mensaje."
            self.nombre = ""
            self.correo = ""
            self.mensaje = ""

def FormularioContacto():
    return rx.box(
        rx.heading("Formulario de Contacto", font_size="24px", margin_bottom="20px"),
	# Campo del nombre
        rx.input(
            placeholder="Nombre",
            value=FormularioContactoState.nombre,
            on_change=FormularioContactoState.set_nombre,
            width="100%",
            margin_bottom="10px"
        ),
        # Campo del correo electrónico
        rx.input(
            placeholder="Correo Electrónico",
            value=FormularioContactoState.correo,
            on_change=FormularioContactoState.set_correo,
            width="100%",
            margin_bottom="10px"
        ),
        # Campo del mensaje
        rx.text_area(
            placeholder="Escribe tu mensaje aquí...",
            value=FormularioContactoState.mensaje,
            on_change=FormularioContactoState.set_mensaje,
            width="100%",
            margin_bottom="10px"
        ),
        # Botón de enviar
        rx.button(
            "Enviar",
            on_click=FormularioContactoState.enviar_formulario,
            color_scheme="blue",
            width="100%",
        ),
        # Mostrar mensajes de error o éxito si existen
        rx.cond(FormularioContactoState.error, rx.text(FormularioContactoState.error, color="red", margin_top="10px")),
        rx.cond(FormularioContactoState.exito, rx.text(FormularioContactoState.exito, color="green", margin_top="10px")),
        width="100%",
        max_width="600px",
        padding="20px",
        border="1px solid #3688d9",
        border_radius="12px",
        box_shadow="0px 4px 25px rgba(0, 126, 255, 0.7)",
	background="linear-gradient(#000, #222)"
    )

def index() -> rx.Component:
    return rx.container(
        rx.vstack(
            FormularioContacto(),
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