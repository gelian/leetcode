function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;

        if (hashMap.has(diff)) {
            return [hashMap.get(diff) as number, i];
        }

        hashMap.set(num, i);
    }

    return [-1, -1];
}
