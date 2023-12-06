// 31. Next Permutation => Just found the next big
// Time Complexity = O(n);
// using dictoniary approach

var nextPermutation = function(nums:number[]):number[] {
    let n=nums.length;
    let idx=-1;
    // Finding breakpoint
    for(let i=n-2;i>=0;i--) {
        if(nums[i] < nums[i+1]) {
            idx=i;
            break;
        }
    }
    if(idx === -1) {
        nums.reverse();
        return nums;
    }

    // just bigger than current idx
    for(let i=n-1;i>idx;i--) {
        if(nums[i] > nums[idx]) {
            let temp=nums[i];
            nums[i]=nums[idx];
            nums[idx]=temp;
            break;
        }
    }

    // reversing rest for just bigger
    let i=idx+1;
    let j=n-1;
    while(i<j) {
        let temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
        i++;
        j--;
    }
    return nums;
};