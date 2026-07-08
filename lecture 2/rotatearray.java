public class rotatearray {
    public static void main(String[] args) {

        int[] nums = {1, 2, 3, 4, 5};
        int k = 2;

        for (int i = 0; i < k; i++) {
            int last = nums[nums.length - 1];

            for (int j = nums.length - 1; j > 0; j--) {
                nums[j] = nums[j - 1];
            }

            nums[0] = last;
        }

        System.out.println("Rotated Array:");
        for (int n : nums) {
            System.out.print(n + " ");
        }
    }
}