a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)


if a > b:
    if b > c:
        print(c)
    else:
        print(b)
else:
    if a > c:
        print(c)
    else:
        print(a)
