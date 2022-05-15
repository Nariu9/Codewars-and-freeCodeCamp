function isTriangle(a,b,c)
{



  if (a > 0 && b > 0 && c > 0) {
    return (a < b + c) && (b < a + c) && (c < a + b);
  }
  return false;
}

console.log(isTriangle(4,6,4));