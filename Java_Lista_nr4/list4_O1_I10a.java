/**
 * @(#)list4_O1_I10a.java
 *
 * excercise O1 from list no. 4 (List 2, ex. I10 (a))
 * @author: Marcel Sawicki
 * @version 1.00 2014/01/18
 */

public class list4_O1_I10a{

public static class liczba{
	//zmienne
	
	double a=1;
	double f=a;
	int k=0;
	double x=3;
	double epsilon=0.1;
	
	//metody
	//settery
	//gettery
	
	public double eDoX(double x) {
	
	do{
			k++;
			a*=(x/k);
			f+=a;
			
			
	}while(a>epsilon);
	return f;
	}//eDoX

}//class liczba

public static void main(String[] args) {
	liczba Moja = new liczba();
//	Moja.ustawRozw(1);
	System.out.println("Program obliczajacy e do potegi x:");
	
	System.out.println(Moja.eDoX(3));

} //main
}