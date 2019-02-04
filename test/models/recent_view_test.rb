# == Schema Information
#
# Table name: recent_views
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer
#  count      :integer
#  product_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class RecentViewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
