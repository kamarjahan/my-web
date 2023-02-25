import tkinter as tk

class GraphicalCalculator:
    def __init__(self, master):
        self.master = master
        master.title("Graphical Calculator")

        # Create the display
        self.display = tk.Entry(master, width=20, font=('Arial', 20))
        self.display.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

        # Create the buttons
        buttons = [
            "7", "8", "9", "+",
            "4", "5", "6", "-",
            "1", "2", "3", "*",
            "0", ".", "=", "/"
        ]
        row = 1
        col = 0
        for button in buttons:
            command = lambda x=button: self.button_click(x)
            tk.Button(master, text=button, width=5, height=2, command=command).grid(row=row, column=col)
            col += 1
            if col > 3:
                col = 0
                row += 1

    def button_click(self, key):
        if key == "=":
            # Calculate the expression in the display
            try:
                result = eval(self.display.get())
                self.display.delete(0, tk.END)
                self.display.insert(0, str(result))
            except:
                self.display.delete(0, tk.END)
                self.display.insert(0, "Error")
        elif key == "C":
            # Clear the display
            self.display.delete(0, tk.END)
        else:
            # Add the key to the display
            self.display.insert(tk.END, key)

root = tk.Tk()
calculator = GraphicalCalculator(root)
root.mainloop()
