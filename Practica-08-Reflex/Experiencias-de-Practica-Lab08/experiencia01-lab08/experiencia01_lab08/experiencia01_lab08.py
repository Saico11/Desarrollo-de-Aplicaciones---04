"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx

from rxconfig import config


class State(rx.State):
    """The app state."""

    ...


class CountState(rx.State):
    count: int = 0

    def increment(self):
        self.count += 1

    def decrement(self):
        self.count -= 1

def counter():
    return rx.flex(
        rx.button(
            "Disminuir",
            color_scheme="red",
            on_click=CountState.decrement,
        ),
        rx.heading(CountState.count),
        rx.button(
            "Incrementar",
            color_scheme="grass",
            on_click=CountState.increment,
        ),
        spacing="3",
    )

def index() -> rx.Component:
    return rx.container(
        counter(),
    )



app = rx.App()
app.add_page(index)
