import java.util.Scanner;
public class Main {
   public static void main(String args[]) {
      Scanner sc = new Scanner(System.in);
      System.out.print("Tom's mass in gram : ");
      double massInGramT = sc.nextDouble();
      double massInKgT = (massInGramT / 1000) ;
      System.out.print("\nTom's height in inch : ");
      double heightInInchT = sc.nextDouble();
      double heightInMeterT = (heightInInchT*0.0254);
      double BMIT = massInKgT / (heightInMeterT * heightInMeterT);
      //System.out.print("\nTom's BMI is " + BMIT + " kg/m2");
      
      
      System.out.print("\n\nJerry's mass in gram : ");
      double massInGramJ = sc.nextDouble();
      double massInKgJ = (massInGramJ / 1000) ;
      System.out.print("\nJerry's height in inch : ");
      double heightInInchJ = sc.nextDouble();
      double heightInMeterJ = (heightInInchJ*0.0254);
      double BMIJ = massInKgJ / (heightInMeterJ * heightInMeterJ);
      //System.out.print("\nJerry's BMI is " + BMIJ + " kg/m2");
      

      System.out.println("\n\nIs Tom's BMI higher than Jerry's?" + (BMIT > BMIJ));
   }
}



//we used this method before and was able to get it to run. 
