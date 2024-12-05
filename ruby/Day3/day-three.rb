sample1 = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"
sample2 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
file_path = 'input.txt' 
# file_path = 'sample.txt'


corrupted_memory = File.read(file_path)

# part one

def sum_mul_operations(corrupted_memory)
  
  total = 0
  pattern = /mul\((\d{1,3}),(\d{1,3})\)/
  
  corrupted_memory.scan(pattern) do |match|
    num1, num2 = match.map(&:to_i)
    total += num1 * num2
  end
  
  total

  # sample should return 161
  # real input should return 175015740
end

# part two

def sum_enabled_mul_operations(corrupted_memory)
  sum_total = 0
  pattern = /(do\(\)|don't\(\)|mul\((\d{1,3}),(\d{1,3})\))/
  enabled = true
  
  corrupted_memory.scan(pattern).each do |full_match, num1, num2|
    case full_match
    when "do()"
      enabled = true
    when "don't()"
      enabled = false
    else 
      if enabled && num1 && num2
        sum_total += (num1.to_i * num2.to_i)
      end
    end
  end

  sum_total

  # sample should return 48
  # real input should return 112272912
end

total_sum_all_mul_operations = sum_mul_operations(corrupted_memory)
total_sum_enabled_mul_operations = sum_enabled_mul_operations(corrupted_memory)

puts "Total sum of all mul operations: #{total_sum_all_mul_operations}"
puts "Total sum of enabled mul operations: #{total_sum_enabled_mul_operations}"
