import pygame
import random

pygame.init()

# screen
screen_width = 400
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Flappy Bird')

# bird
bird_width = 50
bird_height = 50
bird_pos = [100, 300]
gravity = 0.25
jump_strength = 4  # Adjust this value for a smaller jump
bird_movement = 0

# pipe
pipe_width = 100
pipe_distance = 250
pipe_speed = 5
pipes = []


game_active = True

class Pipe:
    def __init__(self, x, height):
        self.x = x
        self.height = height

    def draw(self, screen):
        upper_pipe_height = self.height
        lower_pipe_height = max(screen_height - self.height - pipe_distance, 0)  # Ensure non-negative height

        # Scale the pipe images
        upper_pipe_img = pygame.transform.scale(pipe_image, (pipe_width, upper_pipe_height))
        lower_pipe_img = pygame.transform.flip(pygame.transform.scale(pipe_image, (pipe_width, lower_pipe_height)), False, True)

        # Blit the pipes onto the screen
        screen.blit(upper_pipe_img, (self.x, 0))
        screen.blit(lower_pipe_img, (self.x, self.height + pipe_distance))


def restart_game():
    global bird_pos, bird_movement, pipes, score
    bird_pos = [100, 300]
    bird_movement = 0
    pipes = []
    score = 0        

def create_pipe():
    random_height = random.randint(150, 350)  # Adjust the range for a less extreme variation
    new_pipe = Pipe(400, random_height)
    pipes.append(new_pipe)

def move_pipes():
    for pipe in pipes:
        pipe.x -= pipe_speed

    if len(pipes) > 0 and pipes[0].x <= -pipe_width:
        pipes.pop(0)

    if len(pipes) == 0 or pipes[-1].x <= screen_width - 150:
        create_pipe()



def check_collision():
    # Check if bird hits the top or bottom of the screen
    if bird_pos[1] <= 0 or bird_pos[1] + bird_height >= screen_height:
        return True

    for pipe in pipes:
        if (
            bird_pos[0] < pipe.x + pipe_width
            and bird_pos[0] + bird_width > pipe.x
            and (bird_pos[1] < pipe.height or bird_pos[1] + bird_height > pipe.height + pipe_distance)
        ):
            return True

    return False

def rotate_bird(bird):
    new_bird = pygame.transform.rotozoom(bird, -bird_movement * 3, 1)
    return new_bird

# images
bird_image = pygame.transform.scale(pygame.image.load('bird.png'), (bird_width, bird_height))
bg_image = pygame.transform.scale(pygame.image.load('background.png'), (screen_width, screen_height))
pipe_image = pygame.image.load('pipe.png')

# fonts
font = pygame.font.Font(None, 36)

# game variables
score = 0
high_score = 0

running = True
while running:
    screen.blit(bg_image, (0, 0))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE and game_active:
                bird_movement = 0
                bird_movement -= jump_strength

            if event.key == pygame.K_r and not game_active:
                restart_game()
                game_active = True

    if game_active:
        bird_movement += gravity
        bird_pos[1] += bird_movement

        if not check_collision():
            screen.blit(rotate_bird(bird_image), (bird_pos[0], bird_pos[1]))
            move_pipes()
            for pipe in pipes:
                pipe.draw(screen)

            # Update and display score
            score += 1
            if score > high_score:
                high_score = score

            score_text = font.render(f"Score: {score}", True, (255, 255, 255))
            high_score_text = font.render(f"High Score: {high_score}", True, (255, 255, 255))
            screen.blit(score_text, (10, 10))
            screen.blit(high_score_text, (10, 50))

            pygame.display.flip()
        else:
            game_active = False
    else:
        game_over_text = font.render("Game Over", True, (255, 0, 0))
        restart_text = font.render("Press 'R' to Restart", True, (255, 255, 255))
        screen.blit(game_over_text, (screen_width // 2 - 100, screen_height // 2 - 50))
        screen.blit(restart_text, (screen_width // 2 - 120, screen_height // 2 + 20))

        pygame.display.flip()

# Remember to add pygame.quit() at the end of your script
pygame.quit()
