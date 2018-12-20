# == Schema Information
#
# Table name: carts
#
#  id             :bigint(8)        not null, primary key
#  buyer_id       :integer
#  purchase_total :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class CartTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
