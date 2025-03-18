print('-------------------------------------------------\nBem vindo ao JOGO DA ADIVINHAÇÃO!\nVocê tem que escolher um número entre 1 a 100!\nBoa sorte!\n-------------------------------------------------\n')
import math as Math
import random
resposta = Math.floor(random.randint(1, 100))
tentativa = 1

while True:
    palpite = int(input('Digite um número entre 1 a 100\n'))
    if (palpite <= 0) or (palpite >= 101):
        print('Por favor, digite um número entre 1 a 100')
        tentativa = tentativa
        continue

    if palpite < resposta:
        tentativa += 1
        print('mais ALTO')
    elif palpite > resposta:
        tentativa += 1
        print('mais BAIXO')
    elif palpite == resposta:
        print('Você acertou!')
        if tentativa == 1:
            print('Foi apenas', tentativa, 'tentativa, UAU!')
        else:
            print('Foram', tentativa, 'tentativas!')
        break