x = input().split()
list = []

for i in range(len(x)):
    list.append(int(x[i]))

for i in range(len(list)):
    if list[i] != max(list) and list[i] != min(list):
        print(i)
