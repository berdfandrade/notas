#include <SDL2/SDL.h>

int main() {
  if (SDL_Init(SDL_INIT_VIDEO) < 0) {
    std::cout "Erro ao inicializar a SDL: " << SDL_GetError() << std::endl;
    return -1;
  }
 
  // Mantém a janela aberta por um tempo (exemplo : 3 segundos)
  SDL_Delay(3000); 
  
  SDL_DestroyWindow(janela);
  SDL_Quit(); 
  return 0; 

}

