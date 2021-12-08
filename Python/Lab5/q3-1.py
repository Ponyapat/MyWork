x = int(input())
a = 0
b = 1

for i in range(x):
    if i <= 1:
        print(i)
    else:
        c = a + b
        a = b
        b = c
        print(c)
