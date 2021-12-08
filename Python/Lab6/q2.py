list = [int(item) for item in input().split()]
max = 0

for i in range(len(list)):
    if list[i] > max:
        max = list[i]


for i in range(len(list)):
    if list[i] == max:
        print(i)
