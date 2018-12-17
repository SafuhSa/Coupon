# == Schema Information
#
# Table name: products
#
#  id           :bigint(8)        not null, primary key
#  seller_id    :integer
#  product_name :string
#  price        :integer
#  dis_price    :integer
#  description  :text
#  quantity     :integer
#  category     :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
