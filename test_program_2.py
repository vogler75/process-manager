import time
import sys

print("Test Program 2 started.")
sys.stdout.flush()

count = 0
while True:
    count += 1
    print(f"Test Program 2: Heartbeat {count}")
    sys.stdout.flush()
    time.sleep(1)
