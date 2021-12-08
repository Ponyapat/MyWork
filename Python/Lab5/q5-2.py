a, b, c = input().split()
c = int(c)

for i in range(c):
    for j in range(c):
        if i == j:
            print(a, end="")
        else:
            print(b, end="")
    print()
