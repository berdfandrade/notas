# Importações necessárias
import sys
from PyQt6.QtWidgets import QApplication, QMainWindow, QTextEdit, QAction, QFileDialog

# Função para salvar o conteúdo em um arquivo
def save_file():
    options = QFileDialog.Options()
    file_path, _ = QFileDialog.getSaveFileName(window, "Salvar Arquivo", "", "Arquivos de Texto (*.txt);;Todos os Arquivos (*)", options=options)
    if file_path:
        with open(file_path, 'w') as file:
            file.write(text_editor.toPlainText())

# Função para abrir um arquivo
def open_file():
    options = QFileDialog.Options()
    file_path, _ = QFileDialog.getOpenFileName(window, "Abrir Arquivo", "", "Arquivos de Texto (*.txt);;Todos os Arquivos (*)", options=options)
    if file_path:
        with open(file_path, 'r') as file:
            text_editor.setPlainText(file.read())

# Criação da aplicação
app = QApplication([])

# Criação da janela principal
window = QMainWindow()
window.setWindowTitle("Editor de Texto Simples")

# Criação da área de edição de texto (QTextEdit)
text_editor = QTextEdit()
window.setCentralWidget(text_editor)

# Criação de ações para Salvar e Abrir arquivos
save_action = QAction("Salvar", window)
save_action.triggered.connect(save_file)

open_action = QAction("Abrir", window)
open_action.triggered.connect(open_file)

# Criação de um menu de arquivo
file_menu = window.menuBar().addMenu("Arquivo")
file_menu.addAction(save_action)
file_menu.addAction(open_action)

# Exibição da janela principal
window.show()

# Execução da aplicação
sys.exit(app.exec())
