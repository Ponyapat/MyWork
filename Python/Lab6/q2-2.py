list = input().split()

for i in range(len(list)):
    if list[i] == max(list):
        print(i)
