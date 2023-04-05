using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbsoluteDifference
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n;
            Console.WriteLine("Enter a Number :");
            n = int.Parse(Console.ReadLine());
            int res1 = AbsoluteDiff(n);
            Console.WriteLine("Result = "+res1);
            Console.ReadKey();

        }
        static int AbsoluteDiff(int n)
        {
            if(n>51)
            {
                int res = (n - 51)*3;
                return res;
                
            }
            else
            {
                int res2 = n - 51;
                return res2;
            }
        }
    }
}
