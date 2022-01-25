
def showAverageAndSd(studentList):
    for i in studentList:
        i["total"] = i["attendance"]+i["midterm"]+i["final"] + i["lab"][0]+i["lab"][1]+i["lab"][2]+i["lab"][3]

    avg = sum(i["total"] for i in studentList)/len(studentList)

    for i in studentList:
        i["totalsd"] = ((i["attendance"] + i["midterm"] + i["final"] +
                         i["lab"][0]+i["lab"][1]+i["lab"][2]+i["lab"][3]) - avg)**2

    sd = (sum(i["totalsd"] for i in studentList) / (len(studentList)-1)) ** 0.5

    print('{:.2f} {:.2f}'.format(avg, sd))


    
    # sumat = 0
    # summid = 0
    # sumfinal = 0
    # sumlab = 0
    # for i in studentList:
    #     sumat += i["attendance"]

    # for i in studentList:
    #     summid += i["midterm"]

    # for i in studentList:
    #     sumfinal += i["final"]

    # for i in studentList:
    #     sumlab += i["lab"][0]+i["lab"][1]+i["lab"][2]+i["lab"][3]

    # avg = (sumat + summid + sumfinal + sumlab) / len(studentList)

    
