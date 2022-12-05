a, b = input().split()

if a == 'X' and b == 'Z':
    print('Player1 wins')
elif a == 'Y' and b == 'X':
    print('Player1 wins')
elif a == 'Z' and b == 'Y':
    print('Player1 wins')
elif a == 'X' and b == 'Y':
    print('Player2 wins')
elif a == 'Y' and b == 'Z':
    print('Player2 wins')
elif a == 'Z' and b == 'X':
    print('Player2 wins')
else:
    print('Draw')
