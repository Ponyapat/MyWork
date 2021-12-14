list = input().split()

for i in range(len(list)):
    if list[i] == min(list):
        print(i)
