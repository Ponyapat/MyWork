a, b, c = input().split()
a = float(a)
c = float(c)

if b == '+':
    print('{:.2f}'.format(a+c))
elif b == '-':
    print('{:.2f}'.format(a-c))
elif b == '*':
    print('{:.2f}'.format(a*c))
elif b == '/' and c == 0:
    print('Division by zero ')
elif b == '/':
    print('{:.2f}'.format(a/c))
elif b == '**':
    print('{:.2f}'.format(a**c))
