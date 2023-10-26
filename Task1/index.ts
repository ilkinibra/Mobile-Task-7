/// 4. Daxil olan ədədin mənfi və yaxud müsbət olduğunu yoxlayıb boolean qaytaran funksiya yazın.

function isPositive(number) {
    if (number > 0) {
      return true;
    } else {
      return false;
    }
  }
  const num = -5;
  const isNumPositive = isPositive(num);
  console.log(`Is ${num} positive? ${isNumPositive}`);