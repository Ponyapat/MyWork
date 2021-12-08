x = int(input('Enter number of inputs:'))
sum = 0

for i in range(x):
    data = float(input('Enter Data#{}:'.format(i+1)))
    sum = sum + data


sum = sum / x

print('Average:{:.2f}'.format(sum))
