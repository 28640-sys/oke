def on_button_pressed_a():
    global letter
    letter = letter + 1
input.on_button_pressed(Button.A, on_button_pressed_a)

letter = 0
radio.set_group(1)

def on_forever():
    if letter == 11:
        basic.show_string("k")
basic.forever(on_forever)

def on_forever2():
    if letter == 12:
        basic.show_string("l")
basic.forever(on_forever2)

def on_forever3():
    if letter == 13:
        basic.show_string("m")
basic.forever(on_forever3)

def on_forever4():
    if letter == 14:
        basic.show_string("n")
basic.forever(on_forever4)

def on_forever5():
    if letter == 15:
        basic.show_string("o")
basic.forever(on_forever5)

def on_forever6():
    if letter == 1:
        basic.show_string("a")
basic.forever(on_forever6)

def on_forever7():
    if letter == 16:
        basic.show_string("p")
basic.forever(on_forever7)

def on_forever8():
    if letter == 17:
        basic.show_string("q")
basic.forever(on_forever8)

def on_forever9():
    if letter == 2:
        basic.show_string("b")
basic.forever(on_forever9)

def on_forever10():
    if letter == 8:
        basic.show_string("h")
basic.forever(on_forever10)

def on_forever11():
    if letter == 18:
        basic.show_string("r")
basic.forever(on_forever11)

def on_forever12():
    if letter == 19:
        basic.show_string("s")
basic.forever(on_forever12)

def on_forever13():
    if letter == 6:
        basic.show_string("f")
basic.forever(on_forever13)

def on_forever14():
    if letter == 20:
        basic.show_string("t")
basic.forever(on_forever14)

def on_forever15():
    if letter == 4:
        basic.show_string("d")
basic.forever(on_forever15)

def on_forever16():
    if letter == 21:
        basic.show_string("u")
basic.forever(on_forever16)

def on_forever17():
    if letter == 22:
        basic.show_string("v")
basic.forever(on_forever17)

def on_forever18():
    if letter == 5:
        basic.show_string("e")
basic.forever(on_forever18)

def on_forever19():
    if letter == 23:
        basic.show_string("w")
basic.forever(on_forever19)

def on_forever20():
    if letter == 3:
        basic.show_string("c")
basic.forever(on_forever20)

def on_forever21():
    if letter == 24:
        basic.show_string("x")
basic.forever(on_forever21)

def on_forever22():
    if letter == 25:
        basic.show_string("y")
basic.forever(on_forever22)

def on_forever23():
    if letter == 26:
        basic.show_string("z")
basic.forever(on_forever23)

def on_forever24():
    if letter == 9:
        basic.show_string("i")
basic.forever(on_forever24)

def on_forever25():
    if letter == 7:
        basic.show_string("g")
basic.forever(on_forever25)

def on_forever26():
    if letter == 10:
        basic.show_string("j")
basic.forever(on_forever26)
