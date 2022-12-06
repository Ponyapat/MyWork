a, b = input().split()

if a == 'A' and b == 'C':
    print('Player2 wins')
elif a == 'B' and b == 'A':
    print('Player2 wins')
elif a == 'C' and b == 'B':
    print('Player2 wins')
elif a == 'A' and b == 'B':
    print('Player1 wins')
elif a == 'B' and b == 'C':
    print('Player1 wins')
elif a == 'C' and b == 'A':
    print('Player2 wins')
else:
    print('Draw')
