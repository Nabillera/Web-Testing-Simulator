from pydantic import BaseModel

class BugReport(BaseModel):
  level: int
  title: str
  stepsToReproduce: str
  expectedResult: str
  actualResult: str
  severity: str
  type: str