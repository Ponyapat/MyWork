a, b, c = input().split()
c = int(c)

for i in range(1, c+1, 1):
    for j in range(c, 0, -1):
        if i == j:
            print(a, end="")
        else:
            print(b, end="")
    print()
