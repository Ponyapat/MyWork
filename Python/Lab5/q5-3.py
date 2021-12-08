a, b, n = input().split()
n = int(n)

for i in range(n):

    for j in range(n):
        if i == j or i+j == n-1:
            print(a, end='')
        else:
            print(b, end='')
    print()
