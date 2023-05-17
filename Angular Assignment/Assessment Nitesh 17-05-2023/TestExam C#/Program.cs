

using System;
using System.IO;


    class Program
    {
        static void Main(string[] args)
        {
            string directoryPath = @"C:\users\nites"; 
            string fileName = "ExamTest.txt"; 

            
            if (!Directory.Exists(directoryPath))
            {
                Directory.CreateDirectory(directoryPath);
            }

            string filePath = Path.Combine(directoryPath, fileName);

            AddContentToFile(filePath, "May 17 the Spektra System");

            
            string fileContents = ReadFileContents(filePath);
            Console.WriteLine("File Contents:");
            Console.WriteLine(fileContents);

            Console.ReadLine();
        }

        static void AddContentToFile(string filePath, string content)
        {
            
            using (StreamWriter writer = File.AppendText(filePath))
            {
                writer.WriteLine(content);
            }
        }

        static string ReadFileContents(string filePath)
        {
            
            using (StreamReader reader = new StreamReader(filePath))
            {
                return reader.ReadToEnd();
            }
        }
    }