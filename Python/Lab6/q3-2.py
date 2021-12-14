x = input().split()
y = int(input())
min = 0

for i in range(y):
    min += int(x[i])
index = 0

for i in range(len(x)):
    temp = 0
    for j in range(y):
        if(i+j < len(x)):
            temp += int(x[i+j])
        else:
            temp += int(x[len(x)-1])
    if(temp < min):
        min = temp
        index = i
print(min)
print(index)