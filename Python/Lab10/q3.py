def showCurvedGrades(studentList):
    for i in studentList:
        i["total"] = i["attendance"]+i["midterm"]+i["final"] + i["lab"][0]+i["lab"][1]+i["lab"][2]+i["lab"][3]

    avg = sum(i["total"] for i in studentList)/len(studentList)

    for i in studentList:
        i["totalsd"] = ((i["attendance"] + i["midterm"] + i["final"] +
                         i["lab"][0]+i["lab"][1]+i["lab"][2]+i["lab"][3]) - avg)**2

    sd = (sum(i["totalsd"] for i in studentList) / (len(studentList)-1)) ** 0.5

    for i in studentList:
        if i["total"] >= avg + 1.5 * sd:
            print(i["name"], 'A')
        elif i["total"] >= avg + 0.5 * sd:
            print(i["name"], 'B')
        elif i["total"] >= avg - 0.5 * sd:
            print(i["name"], 'C')
        elif i["total"] >= avg - 1.5 * sd:
            print(i["name"], 'D')
        else:
            print(i["name"], 'F')
