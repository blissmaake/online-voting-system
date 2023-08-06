require "test_helper"

class VotingEventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @voting_event = voting_events(:one)
  end

  test "should get index" do
    get voting_events_url
    assert_response :success
  end

  test "should get new" do
    get new_voting_event_url
    assert_response :success
  end

  test "should create voting_event" do
    assert_difference("VotingEvent.count") do
      post voting_events_url, params: { voting_event: { candidates: @voting_event.candidates, duration: @voting_event.duration, eventsDescription: @voting_event.eventsDescription, eventsName: @voting_event.eventsName } }
    end

    assert_redirected_to voting_event_url(VotingEvent.last)
  end

  test "should show voting_event" do
    get voting_event_url(@voting_event)
    assert_response :success
  end

  test "should get edit" do
    get edit_voting_event_url(@voting_event)
    assert_response :success
  end

  test "should update voting_event" do
    patch voting_event_url(@voting_event), params: { voting_event: { candidates: @voting_event.candidates, duration: @voting_event.duration, eventsDescription: @voting_event.eventsDescription, eventsName: @voting_event.eventsName } }
    assert_redirected_to voting_event_url(@voting_event)
  end

  test "should destroy voting_event" do
    assert_difference("VotingEvent.count", -1) do
      delete voting_event_url(@voting_event)
    end

    assert_redirected_to voting_events_url
  end
end
