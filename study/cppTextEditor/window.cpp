#include <iostream>
#include <FL/Fl.H>
#include <FL/Fl_Window.H>
#include <FL/Fl_Input.h>
#include <FL/Fl_Button.h>
#include <FL/Fl_Return_Button.h>

class EditorWindow : public Fl_Window {
public:
    EditorWindow(int w, int h, const char* t) : Fl_Window(w, h, t) {
        // Aqui você pode adicionar a inicialização dos componentes da janela, se necessário
        replace_dlg = new Fl_Window(300, 200, "Replace Dialog");
        replace_find = new Fl_Input(100, 20, 180, 30, "Find:");
        replace_with = new Fl_Input(100, 60, 180, 30, "Replace:");
        replace_all = new Fl_Button(20, 120, 120, 30, "Replace All");
        replace_next = new Fl_Return_Button(160, 120, 120, 30, "Replace Next");
        replace_dlg->end();
    }

    ~EditorWindow() {
        // Aqui você pode adicionar a liberação de memória dos componentes, se necessário
        delete replace_dlg;
        delete replace_find;
        delete replace_with;
        delete replace_all;
        delete replace_next;
    }

    Fl_Window *replace_dlg;
    Fl_Input  *replace_find;
    Fl_Input  *replace_with; 
    Fl_Button *replace_all; 
    Fl_Return_Button *replace_next;
};

int main() {
    EditorWindow Editor(200, 400, "Editor Window");
    Editor.show(); // Mostra a janela criada
    return Fl::run();
}; 