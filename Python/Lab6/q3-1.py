list = input().split()
x = int(input())
a=0
b=0
sum = []
index=0
maxsum=0

for i in range(0,len(list)-(x-1)):
    for j in range(0,x):
        a = int(list[i])
        b += a
        i += 1

    i-=x
    
    if(b > maxsum):
        maxsum=b
        index=i
        
    b=0

print(maxsum)
print(index)