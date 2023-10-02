import tkinter as tk

root = tk.Tk()

root.title("Editor de texto")

text_widget = tk.Text(root)
text_widget.pack() 

def abrir_arquivo():
    arquivo = tk.filedialog.asksaveasfilename(defaultextension=".txt", filetypes=[("Arquivos de Texto", "*.txt")])
    if arquivo: 
        conteudo = text_widget.get("1.0", tk.END)
        with open(arquivo, "w") as file:
            file.write(conteudo) 
def salvar_arquivo():
    arquivo = tk.filedialog.asksaveasfilename(defaultextension=".txt", filetypes=[("Arquivos de Texto", "*.txt")])
    if arquivo:
        conteudo = text_widget.get("1.0", tk.END)
        with open(arquivo, "w") as file:
            file.write(conteudo)
            
menu = tk.Menu(root)
root.config(menu=menu)
file_menu = tk.Menu(menu)
menu.add_cascade(label="Arquivo", menu=file_menu)
file_menu.add_command(label="Abrir", command=abrir_arquivo)
file_menu.add_command(label="Salvar", command=salvar_arquivo)
file_menu.add_separator()
file_menu.add_command(label="Sair", command=root.quit)

root.mainloop()