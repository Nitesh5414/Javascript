function pattern( rows_no)
    {
        let i, j, k;
 
        // for loop for printing
        // upper half
        for (i = 1; i <= rows_no; i++)
        {
 
            // printing i spaces at
            // the beginning of each row
            for (k = 1; k < i; k++)
                document.write(" ");
 
            // printing i to rows value
            // at the end of each row
            for (j = i; j <= rows_no; j++)
                document.write(j + " ");
 
            document.write("<br/>");
        }
 
        // for loop for printing lower half
        for (i = rows_no - 1; i >= 1; i--)
        {
         
            // printing i spaces at the
            // beginning of each row
            for (k = 1; k < i; k++)
                document.write(" ");
 
            // printing i to rows value
            // at the end of each row
            for (j = i; j <= rows_no; j++)
                document.write(j + " ");
 
            document.write("<br/>");
        }
    }
 
    // Driver code
      
    // taking rows value from the user
    let rows_no = 7;
    pattern(rows_no);