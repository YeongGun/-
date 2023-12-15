package study121502;

import java.applet.*;

public class main_cl {
    
    public static void main(String[] args){

        for( int i=0;  i<=5; i++){
            System.out.println( i) ;
        }
        // 구구단 2단 부터 9단까지 출력 

        for( int i=2; i<=9; i++){
            for( int k=1; k<=9; k++)
            System.out.printf("%d*%d \n",i,k, i*k);
        }
        for( int i=1; true; i++){
            System.out.println( i);
            if( i == 13234 )
            break;
        }

        // 1부터 100까지 중에서 10의 배수를 빼고 출력
        for( int i=1; i<=100; i++){
            if( i%10 == 0)
                continue;
            System.out.println( i );

        }

        // 반복문 문제.
        // 정수를 하나 입력 받아서 입력한 정수 만큼 반복 되게 만드세요.
        System.out.print( "정수 입력 : ");
        int cnt = new Scanner(System.in).nextInt();
        for( int i=1; i<=cnt; i++){    
            System.out.println( i );
        }

        int x=1;
        while( x<=10 ){
            System.out.println( x);
            x++;
        }
        Scanner scan = new Scanner(System.in);
        while( true){
            System.out.print( "정수 입력 : ");
            int num = scan.nextInt();
            sum = sum+num;           
            if( num == 0)
                break;
        }
        System.out.println("총합 : "+sum);
        // 0을 입력하기전까지 계속 정수를 입력한다.
        // 0을 입력하면 지금까지 입력했던 모든 정수의 합을 출력 하세요
        
    // Math.floor(Math.random()*10)+1;
        
        int rand = (int)Math.random()*10)+1;
        System.out.println( rand );

        Random rd = new Random();

        rand = rd.nextInt(10)+1; // 0~ 10 전 까지 난수 
        for (int i=1; i<=6; i++){
            System.out.println( rd.nextInt(45)+1 );
        }
        // 동전 앞면 뒷면 맞추기 ( 1.앞면 , 2.뒷면 )

        int coin = (int)(Math.random()*2)+1;
        System.out.println( "1.앞면,2.뒷면 : ");
        int user = scan.nextInt();

        if( coin == user ){
            System.out.println( "정답");
        }else{
            System.out.println( "땡!");
        }
        }
    }
}