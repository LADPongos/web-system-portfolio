function convert_number() {
   var inputNumber = document.getElementById("input-number-id").value;
   var inputType = document.getElementById("input-type-id").value;
   var outputType = document.getElementById("output-type-id").value;
   var outputNumber;

   if (inputType == "input-binary" && outputType == "output-octal") outputNumber = binary_To_Octal(inputNumber);
   if (inputType == "input-binary" && outputType == "output-decimal") outputNumber = binary_To_Decimal(inputNumber);
   if (inputType == "input-binary" && outputType == "output-hexadecimal") outputNumber = binary_To_Hexadecimal(inputNumber);
   if (inputType == "input-binary" && outputType == "output-binary") outputNumber = inputNumber;

   if (inputType == "input-octal" && outputType == "output-binary") outputNumber = octal_To_Binary(inputNumber);
   if (inputType == "input-octal" && outputType == "output-decimal") outputNumber = octal_To_Decimal(inputNumber);
   if (inputType == "input-octal" && outputType == "output-hexadecimal") outputNumber = octal_To_Hexadecimal(inputNumber);
   if (inputType == "input-octal" && outputType == "output-octal") outputNumber = inputNumber;

   if (inputType == "input-decimal" && outputType == "output-binary") outputNumber = decimal_To_Binary(inputNumber);
   if (inputType == "input-decimal" && outputType == "output-octal") outputNumber = decimal_To_Octal(inputNumber);
   if (inputType == "input-decimal" && outputType == "output-hexadecimal") outputNumber = decimal_To_Hexadecimal(inputNumber);
   if (inputType == "input-decimal" && outputType == "output-decimal") outputNumber = inputNumber;

   if (inputType == "input-hexadecimal" && outputType == "output-binary") outputNumber = hexadecimal_To_Binary(inputNumber);
   if (inputType == "input-hexadecimal" && outputType == "output-octal") outputNumber = hexadecimal_To_Octal(inputNumber);
   if (inputType == "input-hexadecimal" && outputType == "output-decimal") outputNumber = hexadecimal_To_Decimal(inputNumber);
   if (inputType == "input-hexadecimal" && outputType == "output-hexadecimal") outputNumber = inputNumber;

   document.getElementById("output-number-id").value = outputNumber;
}

// Binary to Octal - Binary to Decimal - Binary to Hexadecimal //
function binary_To_Octal(inputNumber) {
   return parseInt(inputNumber, 2).toString(8);
}

function binary_To_Decimal(inputNumber) {
   return parseInt(inputNumber, 2);
}

function binary_To_Hexadecimal(inputNumber) {
   return parseInt(inputNumber, 2).toString(16);
}

// Octal to Binary - Octal to Decimal - Octal to Hexadecimal //
function octal_To_Binary(inputNumber) {
   return parseInt(inputNumber, 8).toString(2);
}

function octal_To_Decimal(inputNumber) {
   return parseInt(inputNumber, 8);
}

function octal_To_Hexadecimal(inputNumber) {
   return parseInt(inputNumber, 8).toString(16);
}

// Decimal to Binary - Decimal to Octal - Decimal to Hexadecimal //
function decimal_To_Binary(inputNumber) {
   return parseInt(inputNumber).toString(2);
}

function decimal_To_Octal(inputNumber) {
   return parseInt(inputNumber).toString(8);
}

function decimal_To_Hexadecimal(inputNumber) {
   return parseInt(inputNumber).toString(16);
}

// Hexadecimal to Binary - Hexadecimal to Octal - Hexadecimal to Decimal //
function hexadecimal_To_Binary(inputNumber) {
   return parseInt(inputNumber, 16).toString(2);
}

function hexadecimal_To_Octal(inputNumber) {
   return parseInt(inputNumber, 16).toString(8);
}

function hexadecimal_To_Decimal(inputNumber) {
   return parseInt(inputNumber, 16);
}