def createSeatMap():
    row, col = input().split()
    row = int(row)
    col = int(col)
    s = []
    for i in range(row):
        s.append([0]*col)
    return s


def showSeat(s):
    row = len(s)
    col = len(s[0])
    for i in range(row):
        for j in range(col):
            if s[i][j] == 1:
                print("X", end=" ")
            else:
                print("_", end=" ")
        print()



def booking(s):
    success = 0
    fail = 0
    x, y = input().split()
    x = int(x)
    y = int(y)
    while x != -1 or y != -1:
        if s[x][y] == 0:
            s[x][y] = 1
            success += 1
        else:
            fail += 1
        x, y = input().split()
        x = int(x)
        y = int(y)
    return success, fail, s
