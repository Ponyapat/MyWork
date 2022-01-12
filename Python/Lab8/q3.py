import math


def myDistance(u, a, t):
    s = u * t + (1 / 2) * a * t ** 2
    return s


def myVelocity(u, a, s):
    v = math.sqrt(u ** 2 + 2 * a * s)
    return v
