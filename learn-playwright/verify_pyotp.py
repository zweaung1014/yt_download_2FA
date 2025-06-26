import pyotp
import subprocess
import os

SECRET = "2wzgrqmzbpjqyg44nikxjlwa63r36ejv"

totp = pyotp.TOTP(SECRET)
code = totp.now()
print(f"Code: {code}")

env = os.environ.copy()
env["TOTP_CODE"] = code

# Step 1: Run Playwright test with trace recording ON
#command = 'npx playwright test --project=chromium tests/test-13.spec.ts' # test on chromium only
command = 'npx playwright test tests/test-18.spec.ts'
subprocess.run(command, shell=True, env=env)

# Step 2: Open the latest trace file with trace viewer
# By default, trace is saved in test-results/<test-name>/trace.zip
# trace_path = os.path.join("learn-playwright", "test-results", "test-8", "trace.zip")

# if os.path.exists(trace_path):
#     subprocess.run(f"npx playwright show-trace {trace_path}", shell=True)
# else:
#     print("⚠️ Trace file not found. Maybe test failed to generate trace.")